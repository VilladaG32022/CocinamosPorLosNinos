import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import UserDetails from '../FormDetails/UserDetails';

function Form() {
  //state for steps
  const [step, setstep] = useState(1);
  const [error, setError] = useState(false);
  //state for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    postCode: '',
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {


    // input value from the form
    const { value } = e.target;

    const currentYear = new Date().getFullYear();
    const year = e.target.value.split('-')[0];
    const age = currentYear - year;
    if (age < 18) setError('Invalid age');

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="Switch">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <UserDetails nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    // default case to show nothing
    default:
      return <div className="Switch"></div>;
  }
}

export default Form;
