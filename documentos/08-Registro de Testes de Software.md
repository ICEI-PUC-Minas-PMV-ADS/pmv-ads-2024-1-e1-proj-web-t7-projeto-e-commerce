# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados na aplicação pela equipe, baseado no plano de testes pré-definido.

Os resultados dos testes funcionais realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste executado]

  CT-01: Verificar o funcionamento dos links da página Home. 


  Responsável:Estevão






https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/e3190a55-1e93-4da3-b4ae-d53b68e19d70
<hr>

CT-02: Verificar o funcionamento do filtro de pesquisa

Responsável:Estevão




https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/811aacec-2354-4f3c-bcf6-8cac3b1a0393






CT-03: Verificar detalhes dos produtos e adicionamento ao carrinho

Responsável:Estevão

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/095899fc-54b8-43a7-9124-a4b3d4e8ad8a

CT-04: Verificar o cadastro de usuários
| Validação nome  | Validação email | Validação senha | Validação senha  iguais | Validação campos corretos |
|--------|--------|--------|--------|--------|
| ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/ed2d4f5d-184e-4af4-8356-403663ae56b1) | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/70dd182a-08fb-4b33-a174-001257859dd7) | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/486ea6d5-8fd4-4831-9618-4f273029f990) | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/78118a15-625b-41b8-9e0f-e13c6d723233) | ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/1034d151-9855-476e-9f03-c9a45492b387) |

Responsável:Estevão

| Caso de Teste | CT 05 – Verificar o pagamento |
|---------------|-------------------------------|
| **Pré-condições** | Estar na tela de pagamento |
| **Procedimento (passo a passo)** | 1) Adicionar um produto no carrinho<br>2) Clicar em finalizar compra<br>3) Preencher um formulário de pagamento<br>4) Pagar |
| **Dados de entrada** | nulo |
| **Resultado esperado** | Mensagem de erro do sistema |
| **Resultado obtido** |![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/37b51b1c-29ec-45d5-8cda-b1fae31f03e9) |
| **Avaliação (pegou / não pegou erro)** | RE != RO Pegou erro |
|Resposavel|Estevão|





| Caso de Teste | CT 05 – Verificar o pagamento |
|---------------|-------------------------------|
| **Pré-condições** | Estar na tela de pagamento |
| **Procedimento (passo a passo)** | 1) Adicionar um produto no carrinho<br>2) Clicar em finalizar compra<br>3) Preencher um formulário de pagamento<br>4) Pagar |
| **Dados de entrada** | nome camp: esteva01 (o nome não pode conter números) |
| **Resultado esperado** | Mensagem de erro do sistema |
| **Resultado obtido** |![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/e62a691e-3ed4-4c7b-a034-2d25da37e785) |
| **Avaliação (pegou / não pegou erro)** | RE != RO Pegou erro |
|Resposavel|Estevão|


| Caso de Teste | CT 05 – Verificar o pagamento |
|---------------|-------------------------------|
| **Pré-condições** | Estar na tela de pagamento |
| **Procedimento (passo a passo)** | 1) Adicionar um produto no carrinho<br>2) Clicar em finalizar compra<br>3) Preencher um formulário de pagamento<br>4) Pagar |
| **Dados de entrada** | email  camp: estevao@gmail ( email invalido) |
| **Resultado esperado** | Mensagem de erro do sistema |
| **Resultado obtido** |![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/062fa0f2-b461-4c00-9db9-f3b0c8857412) |
| **Avaliação (pegou / não pegou erro)** | RE != RO Pegou erro |
|Resposavel|Estevão|


| Caso de Teste | CT 05 – Verificar o pagamento |
|---------------|-------------------------------|
| **Pré-condições** | Estar na tela de pagamento |
| **Procedimento (passo a passo)** | 1) Adicionar um produto no carrinho<br>2) Clicar em finalizar compra<br>3) Preencher um formulário de pagamento<br>4) Pagar |
| **Dados de entrada** | endereço camp: rua silvio laranjeira 42 (o endereço não pode conter números) |
| **Resultado esperado** | Mensagem de erro do sistema |
| **Resultado obtido** |![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/3ffb5ffc-8387-4b9e-98aa-5afe1a7bb7e7) |
| **Avaliação (pegou / não pegou erro)** | RE != RO Pegou erro |
|Resposavel|Estevão|



| Caso de Teste | CT 05 – Verificar o pagamento |
|---------------|-------------------------------|
| **Pré-condições** | Estar na tela de pagamento |
| **Procedimento (passo a passo)** | 1) Adicionar um produto no carrinho<br>2) Clicar em finalizar compra<br>3) Preencher um formulário de pagamento<br>4) Pagar |
| **Dados de entrada** | cep camp: 19312  (cep invalido falatando dígitos) |
| **Resultado esperado** | Mensagem de erro do sistema |
| **Resultado obtido** |![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/aacc100b-4b53-4103-89dd-5b035fb06017) |
| **Avaliação (pegou / não pegou erro)** | RE != RO Pegou erro |
|Resposavel|Estevão|


| Caso de Teste | CT 05 – Verificar o pagamento |
|---------------|-------------------------------|
| **Pré-condições** | Estar na tela de pagamento |
| **Procedimento (passo a passo)** | 1) Adicionar um produto no carrinho<br>2) Clicar em finalizar compra<br>3) Preencher um formulário de pagamento<br>4) Pagar |
| **Dados de entrada** | número do cartão camp: 8128 3198 2389  (número do cartão faltando digítos) |
| **Resultado esperado** | Mensagem de erro do sistema |
| **Resultado obtido** |![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/93bc78e4-dfc8-48f4-967c-06f97238384b) |
| **Avaliação (pegou / não pegou erro)** | RE != RO Pegou erro |
|Resposavel|Estevão|



| Caso de Teste | CT 05 – Verificar o pagamento |
|---------------|-------------------------------|
| **Pré-condições** | Estar na tela de pagamento |
| **Procedimento (passo a passo)** | 1) Adicionar um produto no carrinho<br>2) Clicar em finalizar compra<br>3) Preencher um formulário de pagamento<br>4) Pagar |
| **Dados de entrada** | data de validade do cartão camp: 12/23 (data de validade inválida pois o ano é menor que 24) |
| **Resultado esperado** | Mensagem de erro do sistema |
| **Resultado obtido** |![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/b3c89b15-5346-4e34-b204-fb318606ad36) |
| **Avaliação (pegou / não pegou erro)** | RE != RO Pegou erro |
|Resposavel|Estevão|


| Caso de Teste | CT 05 – Verificar o pagamento |
|---------------|-------------------------------|
| **Pré-condições** | Estar na tela de pagamento |
| **Procedimento (passo a passo)** | 1) Adicionar um produto no carrinho<br>2) Clicar em finalizar compra<br>3) Preencher um formulário de pagamento<br>4) Pagar |
| **Dados de entrada** | CVV camp: 12 (Codigo segunrança do cartão faltando dígitos) |
| **Resultado esperado** | Mensagem de erro do sistema |
| **Resultado obtido** |![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/5115e88f-b2c4-4501-bee2-8522c3be042a) |
| **Avaliação (pegou / não pegou erro)** | RE != RO Pegou erro |
|Resposavel|Estevão|



| Caso de Teste | CT 05 – Verificar o pagamento |
|---------------|-------------------------------|
| **Pré-condições** | Estar na tela de pagamento |
| **Procedimento (passo a passo)** | 1) Adicionar um produto no carrinho<br>2) Clicar em finalizar compra<br>3) Preencher um formulário de pagamento<br>4) Pagar |
| **Dados de entrada** | <ul>Dados cliente:<li>Endereço: Rua Silvio Laranjeira, numero: 42, Cidade: Rio de Janeiro, CEP:19312-838</li></ul><ul><li>Nome: estevao</li></ul><ul><li>e-mail: estevao@gmail.com</li></ul><ul>Dados do cartao:<li>Numero cartão:8128 3198 2389 1992</li><li>Validade:12/29</li><li>CVV:123</li></ul>
| **Resultado esperado** | Mensagem de compra finalizada com sucesso |
| **Resultado obtido** |![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/74c73fe0-50fe-47cd-8171-d1657ee2a0ee)|
| **Avaliação (pegou / não pegou erro)** | RE != RO Pegou erro |
|Resposavel|Estevão|

| Caso de Teste | CT 06– Verificar a pagina de vendas |
|---------------|-------------------------------|
| **Pré-condições** | Estar na tela de Carrinho de compras|
| **Procedimento (passo a passo)** | 1)estar logado como administraodor<br>2) Adicionar um produto no carrinho<br>3) Clicar em finalizar compra<br>4) Preencher um formulário de pagamento<br>5) Pagar <br>6)Acessar Página de Vendas |
| **Dados de entrada** | <ul>Dados cliente:<li>Endereço: Rua Silvio Laranjeira, numero: 42, Cidade: Rio de Janeiro, CEP:19312-838</li></ul><ul><li>Nome: estevao</li></ul><ul><li>e-mail: estevao@gmail.com</li></ul><ul>Dados do cartao:<li>Numero cartão:8128 3198 2389 1992</li><li>Validade:12/29</li><li>CVV:123</li></ul> |
| **Resultado esperado** | Mostrar a compra feita em uma tabela de vendas |
| **Resultado obtido** |![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t7-projeto-e-commerce/assets/162747850/0be4839e-ae5f-497b-8980-f00deb6d8666) |
| **Avaliação (pegou / não pegou erro)** | RE != RO Pegou erro |
|Resposavel|Estevão|

