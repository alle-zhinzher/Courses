import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
        };
        this.hendleChange = this.hendleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    hendleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data));

    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label><br />
                        <input placeholder="Input title.."
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.hendleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body</label><br />
                        <textarea placeholder="Input title.."
                            type="text"
                            name="body"
                            value={this.state.body}
                            onChange={this.hendleChange}
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default PostForm