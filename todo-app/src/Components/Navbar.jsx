import React, { Component } from "react";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavbarToggler,
	MDBCollapse,
	MDBFormInline,
} from "mdbreact";

class NavbarPage extends Component {
	state = {
    isOpen: false,
    search: '',
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
  };
  
  searchHandler = e => {
    this.setState({
      search: e.target.value,
    })
  }

	render() {
		return (
			<MDBNavbar color='indigo' dark expand='md'>
				<MDBNavbarBrand>
					<strong className='white-text'>Simple Tasks</strong>
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav right>
						<MDBNavItem>
							<MDBFormInline waves>
								<div className='md-form my-0'>
									<input
										className='form-control mr-sm-2'
										type='text'
                    placeholder='Search'
                    value={this.state.search}
                    onChange={this.searchHandler}
										aria-label='Search'
									/>
								</div>
							</MDBFormInline>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		);
	}
}

export default NavbarPage;
