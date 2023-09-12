load("@aspect_rules_jest//jest:defs.bzl", "jest_test")
load("@aspect_rules_swc//swc:defs.bzl", "swc")
load("@aspect_rules_ts//ts:defs.bzl", real_ts_project = "ts_project")
load("@bazel_skylib//lib:partial.bzl", "partial")

TRANSPILER = partial.make(
    swc,
    swcrc = "//:.swcrc",
)

def ts_project(
        name,
        srcs = [],
        deps = [],
        tsconfig = "//:tsconfig",
        **kwargs):
    real_ts_project(
        name = name,
        srcs = srcs,
        declaration = True,
        resolve_json_module = True,
        transpiler = TRANSPILER,
        tsconfig = tsconfig,
        deps = deps,
        **kwargs
    )

def ts_test(
        name,
        srcs = [],
        deps = [],
        tsconfig = "//:tsconfig",
        **kwargs):
    lib_name = "%s_lib" % name
    real_ts_project(
        name = lib_name,
        srcs = srcs,
        declaration = True,
        resolve_json_module = True,
        transpiler = TRANSPILER,
        tsconfig = tsconfig,
        deps = deps,
        visibility = ["//visibility:private"],
        tags = ["manual"],
    )

    jest_test(
        name = name,
        config = "//:jest_config",
        data = [
            lib_name,
            "//:node_modules/jest-environment-jsdom",
            "//:node_modules/jest-transform-stub",
        ],
        node_modules = "//:node_modules",
        **kwargs
    )
