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



// inserção

async function salvar(pessoa) {
    pessoaMapper.insert(pessoa).then(result => {
        console.log(result);
    });
};

// buscas

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

// buscarPorEmail('joao@gmail.com');


// atualização

async function atualizar(pessoa) {
    pessoaMapper.update(pessoa).then(result => {
        console.log(result);
    })
}

const pessoa = {
    email: 'maria@gmail.com',
    nome: 'Maria das Graças'
};

// atualizar(pessoa);

// deleção

async function deletar(email) {
    pessoaMapper.remove({email}).then(result => {
        console.log(result);
    })
}

deletar('maria@gmail.com');