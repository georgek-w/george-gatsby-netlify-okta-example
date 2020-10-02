import React from 'react';
import BlogRoll from '../components/BlogRoll';

const BlogIndexPage = () => {
    return (
        <>
            <h1>Latest Posts</h1>
            <section>
                <div className={'content'}>
                    <BlogRoll />
                </div>
            </section>
        </>
    )
}

export default BlogIndexPage;