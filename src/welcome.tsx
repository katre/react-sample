type WelcomeProps = {
  name: string;
};

const Welcome = ({ name }: WelcomeProps) => 
  <div>
    Welcome, {name}.
  </div>

export default Welcome;
