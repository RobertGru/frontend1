import React, { Component } from 'react'
import { connect } from 'react-redux'
import Category from './category'
import { fetchCategories } from '../actions/categories'


class Categories extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchCategories())
    }

    render() {
        const { isFetching, failedToLoadCategories, items } = this.props
        return (
            <div className="categories">
                <div className="categories-header">
                    <div className="categories-title">
                        <h2>TOPICS</h2>
                    </div>
                </div>
                {
                    isFetching
                        ? <div style={{ margin: '11px' }}>Loading...</div>
                        : (
                            failedToLoadCategories
                                ? <div style={{ margin: '11px' }}>
                                    Error loading the categories.
                                </div>
                                : <div>
                                    {
                                        items.map(cat => (
                                            <Category
                                                key={cat}
                                                name={cat}
                                            />
                                        ))
                                    }
                                </div>
                        )
                }
            </div>
        )
    }
}

function mapStateToProps({ categories }) {
    const { isFetching, failedToLoadCategories, items } = categories
    return {
        isFetching,
        failedToLoadCategories,
        items
    }
}

export default connect(mapStateToProps)(Categories)
