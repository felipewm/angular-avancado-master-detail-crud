import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDataBase implements InMemoryDbService{
    createDb(){
        let categories = [
            { id: 1, name: "Moradia", description: "Pagamentos de contas da casa"},
            {id: 2, nome: "Saude", description: "Plano de Saúde e Remédios"},
            {id: 3, nome: "Lazer", description: "Cinema, parques, praia"},
            {id: 4, nome: "Salario", description: "Recebimentos de Salário"},
            {id: 5, nome: "Freelas", description: "Trabalhos como freelancer"}
        ];
        return {categories}
    }
}
