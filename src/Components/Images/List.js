import React from 'react';
import axios from 'axios';
import ImageCard from './Card';
import { Navbar, FormControl, Form } from 'react-bootstrap';
import Masonry from 'react-masonry-component';
class ImagesList extends React.PureComponent {
    state = {
        data: [],
        error: "",
        searchValue: "",

    }
    search = (e) => {
        this.setState({ searchValue: e.target.value })
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = () => {
        axios.get('https://www.amiiboapi.com/api/amiibo/')
            .then((response) => {
                this.setState({ data: response.data.amiibo });
            })
            .catch((error) => {
                this.setState({ error: "something went wrong" });
            })
    }
    render() {

        return (
            <>
                <Navbar variant="light" className="header">
                    <Form inline className="nav-form">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 nav-search-box" onChange={this.search} />
                    </Form>
                </Navbar>
                {

                    this.state.error === "" ?

                        this.state.searchValue === undefined ?

                            <Masonry
                                className={"images-container"}
                            >
                                {

                                    this.state.data.map(image => <ImageCard key={image.tail} {...image} />)
                                }

                            </Masonry>
                            :

                            <Masonry
                                className={"images-container"}
                            >
                                {
                                    this.state.data.filter(element => { return element.name.toLowerCase().includes(this.state.searchValue.toLowerCase()) })
                                        .map(image => <ImageCard key={image.tail} {...image} />)

                                }

                            </Masonry>

                        :
                        <div className="error-container">
                            <h2 className="error-head" >Oops..</h2>
                            <span className="error-body">{this.state.error}</span>

                        </div>


                }
            </>
        )
    }
}
export default ImagesList;
