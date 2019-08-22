class UserController {
  store(req, res) {
    return res.json({ ok: 'Chamou' });
  }
}

export default new UserController();
