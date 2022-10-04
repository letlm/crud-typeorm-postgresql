# crud-typeorm-postgresql

Serviço de back-end responsável por gerenciar um CRUD de usuário utilizando TypeORM.

### Endpoints da aplicação:
| Método | Endpoint | Responsabilidade | 
|---|---|---|
| `POST` | `/users` |Criação de usuário |
| `GET` | `/users` |Lista todos os usuários | 
| `GET` | `/users/<id>` |Retorna os dados de um usuário | 
| `PATCH` | `/users/<id>` |Atualiza os dados de um usuário | 
| `DELETE` | `/users/<id>` |Deleta um usuário do banco | 

