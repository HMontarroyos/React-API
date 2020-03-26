import React,{Component}from'react';
class Tabela extends Component{
    render(){
        return(
            <table>
                <tread>
                    <tr>
                        <th>Autores</th>
                        <th>Livros</th>
                        <th>Preços</th>
                        <th>Remover</th>
                    </tr>
                </tread>
                <tbody>
                    <tr>
                        <td>Paulo</td>
                        <td>React</td>
                        <td>1000</td>
                        <td><button>Remover</button></td>
                    </tr>
                    <tr>
                        <td>Daniel</td>
                        <td>Java</td>
                        <td>99</td>
                        <td><button>Remover</button></td>
                    </tr>
                    <tr>
                        <td>Marcos</td>
                        <td>Design</td>
                        <td>150</td>
                        <td><button>Remover</button></td>
                    </tr>
                    <tr>
                        <td>Bruno</td>
                        <td>DevOps</td>
                        <td>100</td>
                        <td><button>Remover</button></td>
                    </tr>
                </tbody>
            </table>
        
        );
    }


}

export default Tabela;