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
    email: 'joao@gmail.com',
    nome: 'João'
};

async function salvar(pessoa) {
    pessoaMapper.insert(pessoa).then(result => {
        console.log(result);
    });
};

salvar(pessoa);