import { login, logout } from "./src/js/api/auth";

global.fetch = jest.fn();

describe('login function', () => {
  beforeEach(() => {
    fetch.mockClear();
    localStorage.clear();
  });

  it('should store a token when provided with valid credentials', async () => {

    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ accessToken: "fake-jwt-token", name: 'Trizzy420' }),
    };

    fetch.mockResolvedValue(mockResponse);

    const result = await login('ogtrizzy420@stud.noroff.no', '111222333');

    const token = JSON.parse(localStorage.getItem('token'));
    expect(token).toEqual('fake-jwt-token');
    expect(result.name).toBe('Trizzy420');
  });
});

describe('logout function', () => {
  it('should clear the token from localStorage', () => {
    localStorage.setItem('token', 'fake-jwt-token');
    
    logout();
    
    expect(localStorage.getItem('token')).toBe(null);
  });
});
