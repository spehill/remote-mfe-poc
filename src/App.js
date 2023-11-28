/*
** React CORS friendly Single Page Application - https://github.com/aws-samples/react-cors-spa 
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of
the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import './App.css';
import { useFetch } from "react-async";

// To be replaced by the endpoint of the API deployed through the CloudFormation Template
const APIEndPoint = 'https://vkd498tj64.execute-api.us-east-1.amazonaws.com/v1/hello';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          {APIEndPoint.startsWith('http') &&
            <APIResult />
          }
          <img src="https://react-cors-spa-vkd498tj64.s3.amazonaws.com/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg" className="App-MainLogo" alt="logo" />
          
        </header>
        <p>This react-based application is an example of a micro frontend hosted in an S3 bucket</p>
        <div className="logos">
            <img src="https://react-cors-spa-vkd498tj64.s3.amazonaws.com/static/media/logoS3.aaefa311c47140b02bed.png" className="App-logoR2L" alt="logo S3" />
        </div>
    </div>
  );
}

const APIResult = () => {
  const { data, error } = useFetch(APIEndPoint, {
    headers: { accept: "application/json" },
  })
  if (error) return <p>{error.message}</p>
  if (data) return <p>{data.message}</p>
  return null
}

export default App;
