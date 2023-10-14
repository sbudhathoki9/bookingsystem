import Button from "./Button";

type LoginProps = {
  onLoginClick: () => void;
};

const Login = ({onLoginClick} : LoginProps) => {
  return (
    
    <Button 
      buttonType="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded" 
      onClick={onLoginClick}
    >
      Get started
    </Button>
  ); 
};

export default Login;
