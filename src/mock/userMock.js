import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
  user: {
    'id': 1,
    'username': 'alegomes',
    'name': 'Ale Gomes',
    'email': 'alegomes@alegomes.com',
    'avatar': './images/avatars/avatar_1.jpeg'
  }
});

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if(email !== 'alegomes@alegomes.com' || password !== '123'){
    return [400, {message: 'Seu email ou senha estão incorretos'}]
  }
  
  const user = {
    'id': 1,
    'name': 'Ale Gomes',
    'username': 'alegomes',
    'email': 'alegomes@alegomes.com',
    'avatar': './images/avatars/avatar_1.jpeg'
  }
  
  return [200, { user }]
});