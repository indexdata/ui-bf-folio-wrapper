import React from 'react';
import { Router } from 'react-router-dom';
import {
  render,
  cleanup,
} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { FormattedMessage } from 'react-intl';

import '../../test/jest/__mock__';
import Settings from './general-settings';

const label = <FormattedMessage id="ui-__packageName__.settings.general" />;

const renderSettingsPage = () => {
  const history = createMemoryHistory();
  return render(
    <Router history={history}>
      <Settings
        label={label}
      />
    </Router>
  );
};

describe('Settings', () => {
  let settingsPage;

  beforeEach(() => {
    settingsPage = renderSettingsPage();
  });

  afterEach(cleanup);

  it('should be rendered', () => {
    const { container } = settingsPage;
    const settingsContent = container.querySelector('[data-test-application-settings-general-message]');
    expect(container).toBeVisible();
    expect(settingsContent).toBeVisible();
  });

});
