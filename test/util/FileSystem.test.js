const { createFolder, deleteFile, pathExists } = require('../../features/support/util/FileSystem');
const { promisify } = require('util');
const fs = require('fs');

const rmdir = promisify(fs.rmdir);
const writeFile = promisify(fs.writeFile);

beforeAll(async () => {
    await createFolder('./test/FileSystem');
    await writeFile('./test/FileSystem/hello.txt', 'howdy');
});

afterAll(async () => {
    // Sequentially delete folders since I don't want to add a 3rd party dependency or write a recursive rmdir function.
    await rmdir('./test/FileSystem/with/nesting/meow');
    await rmdir('./test/FileSystem/with/nesting');
    await rmdir('./test/FileSystem/with');
    await rmdir('./test/FileSystem');
});

describe('FileSystem', () => {

    it('creates a folder that does not exist', async () => {
        const path = './test/FileSystem/with'; 
        expect(await pathExists(path)).toBe(false);
        await createFolder(path);
        expect(await pathExists(path)).toBe(true)
    });

    it('creates a nested folder that does not exist', async () => { 
        const path = './test/FileSystem/with/nesting/meow';    
        expect(await pathExists(path)).toBe(false);
        await createFolder(path);
        expect(await pathExists(path)).toBe(true)
    }); 
    
    it('does not create a folder that exists', async () => { 
        const path = './test/FileSystem';    
        expect(await pathExists(path)).toBe(true);
        await createFolder(path);
        expect(await pathExists(path)).toBe(true)
    });    

    it('deletes a file that exists', async () => {
        const path = './test/FileSystem/hello.txt';    
        expect(await pathExists(path)).toBe(true);
        await deleteFile(path);
        expect(await pathExists(path)).toBe(false);
    });

    it('does not delete a file that does not exist', async () => {
        const path = './test/FileSystem/hello.txt';     
        expect(await pathExists(path)).toBe(false);
        await deleteFile(path);
        expect(await pathExists(path)).toBe(false);
    });    

    it('identifies paths that exist', async () => {
        const path = './test/FileSystem';    
        expect(await pathExists(path)).toBe(true)
    });

    it('identifies paths that do not exist', async () => {
        const path = './test/FileSystem/some/path/that/does/not/exist';   
        expect(await pathExists(path)).toBe(false);
    });  

}); 