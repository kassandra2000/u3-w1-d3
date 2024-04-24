import Alert from 'react-bootstrap/Alert';
const MyWelcome = (props) => {
  return (
    <Alert variant={props.variant}>
      {props.text}
    </Alert>
  );
};

export default MyWelcome;
