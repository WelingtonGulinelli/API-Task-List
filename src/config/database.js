module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'seu-usuario',
  password: 'sua-senha',
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
