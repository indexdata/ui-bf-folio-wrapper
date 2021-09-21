import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@folio/stripes/components';
import NewAppGreeting from '../new-app-greeting';
import { FormattedMessage } from 'react-intl';

export default class GreetingModal extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
  };

  render() {
    return (
      <Modal
        onClose={this.props.onClose}
        open={this.props.open}
        size="small"
        label={<FormattedMessage id="greeting-modal.message" />}
        dismissible
        closeOnBackgroundClick
      >
        <div data-test-greeting-modal>
          <NewAppGreeting />
        </div>
      </Modal>
    );
  }
}
