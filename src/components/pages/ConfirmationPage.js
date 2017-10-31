import React from 'react';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class ConfirmationPage extends React.Component {
  state = {
    loading: true,
    success: false,
  }

  render() {
    const { loading, success } = this.state;
    return (
      <div>
        { loading && <Message icon>
          <Icon name="circle notched" loading />
          <Message.Header>validating your email</Message.Header>
        </Message> }

        { !loading && success && <Message success icon>
          <Icon name="checkmark" />
          <Message.Content>
            <Message.Header>
              Thank you! Your account has been verified
            </Message.Header>
            <Link to="/dashboard">Go to your dashboard</Link>
          </Message.Content>
        </Message>}
      </div>
    );
  }
}

export default ConfirmationPage;
