const cassandra = require('cassandra-driver');
const Mapper = cassandra.mapping.Mapper;

const client = new cassandra.Client({
    contactPoints: ['localhost'],
    localDataCenter: 'datacenter1',
    keyspace: 'aula'
});

const mapper = new Mapper(client, {
    models: {'Pessoa': {tables: ['pessoas']}}
});

const pessoaMapper = mapper.forModel('Pessoa');

const pessoa = {
    email: 'maria@gmail.com',
    nome: 'Maria'
};

async function salvar(pessoa) {
    pessoaMapper.insert(pessoa).then(result => {
        console.log(result);
    });
};


/*async function listar() {
    pessoaMapper.findAll({}).then(result => {
        console.log(result);
    })
}

listar();*/

// salvar(pessoa);

async function buscarPorEmail(email) {
    pessoaMapper.find({email}).then(result => {
        console.log(result);
    });
}

buscarPorEmail('joao@gmail.com');