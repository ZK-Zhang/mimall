let baseURL

switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'https://api.66mz8.com/api/rand.tbimg.php/u0000'
    break
  case 'test':
    baseURL = 'https://api.66mz8.com/api/rand.tbimg.php/u0001'
    break
  case 'prev':
    baseURL = 'https://api.66mz8.com/api/rand.tbimg.php/u0002'
    break
  case 'production':
    baseURL = 'https://api.66mz8.com/api/rand.tbimg.php/u0003'
    break
  default:
    baseURL = 'https://api.66mz8.com/api/rand.tbimg.php/u0004'
    break
}

export default{
    baseURL
}