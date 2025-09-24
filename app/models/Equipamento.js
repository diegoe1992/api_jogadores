const Sequelize = require('sequelize');
const db = require('./conexao.js');

class Equipamento {
  #descricao;
  #bonus_ataque;
  #bonus_defesa;

  constructor() {}

  get descricao() {
    return this.#descricao;
  }
  set descricao(descricao) {
    this.#descricao = descricao;
  }

  get bonus_ataque() {
    return this.#bonus_ataque;
  }
  set bonus_ataque(bonus) {
    this.#bonus_ataque = bonus;
  }

  get bonus_defesa() {
    return this.#bonus_defesa;
  }
  set bonus_defesa(bonus) {
    this.#bonus_defesa = bonus;
  }

  static findAllByJogadorId(id_jogador) {
    return EquipamentoModel.findAll({ where: { id_jogador } });
  }

  static create(novoEquipamento) {
    return EquipamentoModel.create(novoEquipamento);
  }

  static update(equipamentoAtualizado) {
    return EquipamentoModel.update(equipamentoAtualizado);
  }

  static findOne(id_jogador, id_equipamento) {
  return EquipamentoModel.findOne({ where: { id: id_equipamento, id_jogador: id_jogador } });
}

    
    static async update(dados, id_jogador, id_equipamento) {
      try {
        const resultado = await EquipamentoModel.update(dados, { where: { id: id_equipamento, id_jogador: id_jogador } });
        
        console.log('update model', resultado);
        if (resultado) {
          return resultado;
        } else {
          return false;
        }
      } catch (error) {
        throw error;
      }
    }

  }
  

const EquipamentoModel = db.define('equipamento', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_jogador: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING(80),
    allowNull: false,
  },
  bonus_ataque: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  bonus_defesa: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = { Equipamento, EquipamentoModel };