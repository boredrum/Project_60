import { homedir } from 'os';
import { users, newData } from './index.js'
import fs from 'fs';
import path from 'path';


                                        // Excercise 1

fs.writeFile('data.json', JSON.stringify({users}, null, 2), err => {
    if (err){
        console.error(err);
    }else{
        console.log ('Data written to file');
}});


                                        // Excercise 2

const filePath = path.join(homedir(), 'data.json');

fs.writeFile(filePath, JSON.stringify({users}, null, 2), err => {
    if (err){
        console.error(err);
    }else{
        console.log ('Data written on disc');
}});


                                        // Excercise 4, 5

const isExist = async function(filePath){
    try {
        await fs.promises.stat(filePath);
        console.log("File exists");
        return true
    }catch (err){
        console.log("File doesn't exist", err);
        return false
    }
}

async function updateData () {
    if (await isExist(filePath)){
        fs.readFile(filePath, (err, data) => {
            if (err){
                console.log(err);
            }else{
                const recentData = JSON.parse(data);
                const updatedData = {users: [...recentData.users, ...newData]};
                fs.writeFile('data.json', JSON.stringify(updatedData, null, 2), err => {
                    if (err){
                        console.error(err);
                    }else{
                        console.log ('Appended file with new Data in file');
                }});
                fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), err => {
                    if (err){
                        console.log(err);
                    }else{
                        console.log('Appended file with new Data on Disc');
                    }
                })
            }
        })
    }
}

updateData()