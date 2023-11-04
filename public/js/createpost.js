const newPostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create post');
        }
    }
};

// TODO verify route below
const delPostHandler = async (event) => {
    console.log(event);
    // if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to delete post');
        }
    // }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostHandler);

document
    .querySelector('#submit-post-btn')
    .addEventListener('click', newPostHandler);

document
    .querySelector('#post-del-btn')
    .addEventListener('click', delPostHandler);

/* document.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const postId = event.target.getAttribute('data-id');
        document.querySelector('.post-list').value = postId;
    }
}); */