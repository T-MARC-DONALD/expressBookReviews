import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

// Part 11: Async/Await and Promises with Axios for CRUD Operations

// Using async/await to retrieve all books
export async function getAllBooksAsync() {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all books:', error.message);
        throw error;
    }
}

// Using Promises to search books by ISBN
export function getBooksByISBNPromise(ISBN) {
    return new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/books/byISBN`, { ISBN })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.error('Error searching books by ISBN:', error.message);
                reject(error);
            });
    });
}

// Using Promises to search books by author
export function getBooksByAuthorPromise(author) {
    return new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/books/byAuthor`, { author })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.error('Error searching books by author:', error.message);
                reject(error);
            });
    });
}

// Using Promises to search books by title
export function getBooksByTitlePromise(title) {
    return new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/books/byTitle`, { title })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.error('Error searching books by title:', error.message);
                reject(error);
            });
    });
}

// Example usage functions to demonstrate all patterns
export async function demonstrateBookOperations() {
    console.log('=== Book Review Application - Async/Await and Promise Patterns ===\n');

    // 1. Using async/await to get all books
    console.log('1. Using async/await to retrieve all books:');
    try {
        const allBooks = await getAllBooksAsync();
        console.log('✓ Successfully retrieved all books:');
        console.log(JSON.stringify(allBooks, null, 2));
    } catch (error) {
        console.log('✗ Error retrieving books:', error.message);
    }

    console.log('\n' + '='.repeat(60) + '\n');

    // 2. Using Promises to search by ISBN
    console.log('2. Using Promises to search books by ISBN:');
    getBooksByISBNPromise('978-3-16-148410-0')
        .then(result => {
            console.log('✓ Successfully searched books by ISBN:');
            console.log(JSON.stringify(result, null, 2));
        })
        .catch(error => {
            console.log('✗ Error searching by ISBN:', error.message);
        });

    console.log('\n' + '='.repeat(60) + '\n');

    // 3. Using Promises to search by author
    console.log('3. Using Promises to search books by author:');
    getBooksByAuthorPromise('J.K. Rowling')
        .then(result => {
            console.log('✓ Successfully searched books by author:');
            console.log(JSON.stringify(result, null, 2));
        })
        .catch(error => {
            console.log('✗ Error searching by author:', error.message);
        });

    console.log('\n' + '='.repeat(60) + '\n');

    // 4. Using Promises to search by title
    console.log('4. Using Promises to search books by title:');
    getBooksByTitlePromise('Harry Potter')
        .then(result => {
            console.log('✓ Successfully searched books by title:');
            console.log(JSON.stringify(result, null, 2));
        })
        .catch(error => {
            console.log('✗ Error searching by title:', error.message);
        });

    console.log('\n' + '='.repeat(60) + '\n');
    console.log('=== All CRUD operations demonstrated successfully! ===');
}

// Export all functions for external use
export {
    getAllBooksAsync,
    getBooksByISBNPromise,
    getBooksByAuthorPromise,
    getBooksByTitlePromise,
    demonstrateBookOperations
};

// Run demonstration if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    demonstrateBookOperations();
}
