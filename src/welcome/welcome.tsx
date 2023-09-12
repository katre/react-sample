type WelcomeProps = {
  name: string;
  dataTestId: string;
};

const Welcome = ({ name, dataTestId }: WelcomeProps) => 
  <p data-testid={dataTestId}>
    Welcome, {name}.
  </p>

export default Welcome;
