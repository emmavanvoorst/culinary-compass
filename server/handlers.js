const getGeekJoke = async () => {
    // ha hahahh
    try{
      const response = await request(
        {
          uri: 'https://v2.jokeapi.dev/joke/Programming,Any?safe-mode,?type=twopart',
          headers: {
              "Accept": "application/json"
          },
    })
      const setUp = JSON.parse(response).setup;
      const partTwo = JSON.parse(response).delivery
  
      return setUp+partTwo
      
  }catch(err){
      return'Error: ', err;
  }
  };
  
  // 4.2
  getGeekJoke().then((data) => console.log(data));