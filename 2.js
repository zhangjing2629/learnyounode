var i = 2;
for (i; i < process.argv.length; i++) {
    console.log(+process.argv[i]);
}