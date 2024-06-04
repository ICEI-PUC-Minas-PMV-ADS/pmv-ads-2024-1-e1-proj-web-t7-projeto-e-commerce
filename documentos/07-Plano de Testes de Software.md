# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/02-Especificação%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-01	Permitir aos clientes pesquisar e navegar por produtos por categoria</li>
    <li>RF-07	O site deve permitir os usuarios crição de contas.</li>
   <li>RF-08	O site deve permitir os usuarios fazer log-in de contas.</li>
   <li>RF-06	Permitir aos clientes possam verificar os itens comprados</li>
    
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Estevão</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento do filtro de pesquisa</td>
  <td>
 
<ul><li>RF-01	Permitir aos clientes pesquisar e navegar por produtos por categoria</li></ul>
  
   
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Pesquisar algum produto no filtro de pesquisa da pagina Home e verificar se o resultado é exibido na página..</li>
   </ol>
   </td>
  <td>Os dados inseridos no filtro de pesquisa devem retornar algum produto presente na pagina.</td>
  <td>Estevão</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar detalhes dos produtos</td>
  <td>
 
<ul><li>RF-02	Exibir informações detalhadas sobre cada produto, incluindo preço, imagem, descrição e avaliações dos clientes</li>
<li>RF-03	Permitir aos clientes adicionar produtos ao carrinho de compras</li></ul>
  
   
  </td>
  <td>Verificar se todas as informações referentes aos produtos estão disponíveis na página Home,Móveis
Celulares
TV e vídeo
Eletro-domésticos</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Seguir o link para página Móveis</li>
    <li>Seguir o link para página Celulares</li>
    <li>Seguir o link para página TV e vídeo</li>
    <li>Seguir o link para página Eletro-domésticos</li>
   </ol>
   </td>
  <td>Todas as informações, incluindo preço, imagem, descrição e avaliações dos clientes, devem estar presentes em todas as paginas e deve ser possivel adicionar o item ao carrinho em todas.</td>
  <td>Estevão</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o cadastro de usuários</td>
  <td>
 
<ul><li>RF-07	O site deve permitir os usuarios crição de contas</li></ul>
  
   
  </td>
  <td>Verificar se o cadastro está sendo funcionando corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "login", no Menu.</li>
    <li>Seguir o link para página login</li>
    <li>Clicar em "cadastre-se"</li>
    <li>Preencher o formulário e clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Usuário cadastrado com sucesso".</td>
  <td>Estevão</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o pagamento</td>
  <td>
 
<ul>
    <li>RF-03	Permitir aos clientes adicionar produtos ao carrinho de compras</li>
    <li>RF-04	Permitir que apos os clientes adicionarem produtos ao carrinho de compras possam proceder para o pagamento</li>
    <li>RF-05	Oferecer opções de pagamento com cartão de crédito.</li>
   </ul>
   </td>
   
  </td>
  <td>Verificar se o pagamento está sendo funcionando corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Adicionar um item ao carrinho</li>
    <li>clicar em Finalizar compra</li>
    <li>Preecher formulario pagamento</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Finalizar-compra", deve aparecer a mensagem "Compra finalizada com sucesso".</td>
  <td>Estevão</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-06: Verificar o pagina de vendas</td>
  <td>
 
<ul>
    <li>RF-09	Disponibilizar relatórios de vendas,para o administrador</li>
    
   </ul>
   </td>
   
  </td>
  <td>Verificar se o relatórios de vendas está puxando a compra do usuario e colocando na tabela corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Fazer login como administrador</li>
    <li>clicar em Vizualizar vendas</li>
   </ol>
   </td>
  <td>Apos o usuario finalizar compra deve aparecer uma tabela com nome do cliente/item-comprado/endereço-entrega/preço-item.</td>
  <td>Estevão</td>
 </tr>
</table>



