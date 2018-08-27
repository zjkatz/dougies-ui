import React, { Component } from 'react';

import pdf from '../pdfs/_menu08.pdf';

import { Document, Page } from 'react-pdf';

import './Menu.css';


class Menu extends Component {
  state = {
    numPages: null,
    pageNumbers: [],
  }

//   onDocumentLoad = ({ numPages }) => {
//     this.setState({ numPages });
//   }


  
//   render() {
//     const { pageNumber, numPages } = this.state;

//     console.log(numPages);
    
//     for (var i = 1; i <= this.state.numPages; i++) {
//       this.state.pageNumbers.push(i);
//     }
//     // Array.apply(null, {length: this.state.numPages}).map(Number.call, Number)
//     console.log(this.state.pageNumbers);
    
    
//     return (
//       <div>
//         <div className="menu-window">
//           <div className="menu-container">
//           <Document className="menu-pdf"
//             file={pdf}
//             onLoadSuccess={this.onDocumentLoad}
//           > 
//             {this.state.pageNumbers.map(page => (
//             <Page className="menu-pdf-page" pageNumber={page} key={page}/>
//         ))}
//           </Document>
//           </div>
          
//         </div>

//       </div>
//     );
//   }
// }





  render() {
    return (


      <div>
        MENU PAGE!
        <a href={pdf}>Click here for my pdf</a>


      </ div>
    );
  }
}

export default Menu;
