/*
  From https://docs.intercom.io/configure-intercom-for-your-product-or-site/
         customize-the-intercom-messenger/the-intercom-javascript-api
*/
intercomSettings = {
  email: "example@example.com",
  name: "John Doe",
  user_id: "123",
  created_at: 1234567890,
  app_id: "YOUR_APP_ID",
  widget: {
    activator: "#Intercom"
  }
};

Intercom('boot', intercomSettings);
Intercom('shutdown');
Intercom('update');
Intercom('update', intercomSettings);
Intercom('hide');
Intercom('show');
Intercom('showMessages');
Intercom('showNewMessage');
Intercom('showNewMessage', 'pre-populated content');
Intercom('onHide', () => { /* Do stuff */ });
Intercom('onActivatorClick', () => { /* Do stuff */ });
Intercom('trackEvent', 'invited-friend');

const metadata = {
  invitee_email: 'pi@example.org',
  invite_code: 'ADDAFRIEND'
};
Intercom('trackEvent', 'invited-friend', metadata);

/*
  From https://docs.intercom.io/configure-intercom-for-your-product-or-site/
         customize-intercom-to-be-about-your-users/
         group-your-users-by-company
*/
intercomSettings = {
  email: "example@example.com",
  created_at: 1457552104,
  app_id: "pi3243fa",
  company: {
    id: '123',
    name: 'Intercorp',
    created_at: 1234567890,
    plan: 'pro',
    monthly_spend: 10,
    upgraded_at: 1424941688
  }
};

/*
  From https://docs.intercom.io/configure-intercom-for-your-product-or-site/
         staying-secure/enable-secure-mode-on-your-web-product
*/
intercomSettings = {
  app_id: "pi3243fa",
  user_id: "12345",
  user_hash: "775c502lcc1087d12398571837c"
};
