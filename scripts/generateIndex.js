const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '../src/model');
const indexFilePath = path.join(modelsDir, 'index.ts');

const generateIndex = () => {
  fs.readdir(modelsDir, (err, files) => {
    if (err) {
      console.error('Error reading models directory:', err);
      return;
    }

    const modelFiles = files.filter(
      file => file.endsWith('.ts') && file !== 'index.ts'
    );

    const exportStatements = modelFiles
      .map(file => {
        const modelName = file.replace('.ts', '');
        return `export * from './${modelName}';`;
      })
      .join('\n');

    fs.writeFile(indexFilePath, exportStatements, writeErr => {
      if (writeErr) {
        console.error('Error writing to index.ts:', writeErr);
      } else {
        console.log('index.ts file generated successfully!');
      }
    });
  });
};

generateIndex();
