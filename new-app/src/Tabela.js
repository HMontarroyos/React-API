import React,{Component}from'react';


    const TableHead = () =>{
            return(
            <tread>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </tread>
            );
        }

        const TableBody = props =>{
                const linhas = props.Autores.map((linha,index) => {
                    return(
                        <tr key={index}>
                        <td>{linha.nome}</td>
                        <td>{linha.livro}</td>
                        <td>{linha.preço}</td>
                        <td><button>Remover</button></td>
                        </tr>
                        );
                    });

                    return(
                        <tbody>
                            {linhas}
                        </tbody>
                    )
        }

        class Tabela extends Component{
            render(){
                const {Autores} = this.props;

                return(

                    <table>
                        <TableHead/>
                        <TableBody Autores={Autores}/>
                    </table>
        
        );
    }


}

export default Tabela;