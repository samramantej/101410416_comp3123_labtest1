const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

const removeLogs = () => {

    if (fs.existsSync(logsDir)) {

        fs.readdir(logsDir, (err, files) => {
            if (err) throw err;

            files.forEach(file => {
                const filePath = path.join(logsDir, file);
                console.log(`Deleting file...${file}`);
                fs.unlinkSync(filePath);
            });

            fs.rmdir(logsDir, (err) => {
                if (err) throw err;
                console.log('Logs directory deleted');
            });
        });
    } else {
        console.log('Logs directory does not exist');
    }
};

removeLogs();
