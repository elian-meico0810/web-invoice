export const environment = {
  apiAuthUrl: "http://localhost:5299/",
  apiAppUrl: "http://localhost:5299/",
  azure: {
    clientId: '',
    authority: 'https://login.microsoftonline.com/addTenantId',
    loginRedirectUri: 'http://localhost:4200/',
    logoutRedirectUri: 'http://localhost:4200/',
    scopes: ['User.Read'],
    uri: 'https://graph.microsoft.com/v1.0/me'
  }
};
