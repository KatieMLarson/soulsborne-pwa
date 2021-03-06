    
import { GoogleAuth, JWT } from 'google-auth-library';
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

function authorize() {
     return new Promise(resolve => {
       const auth = new GoogleAuth();
       const jwtClient = new JWT(process.env.GOOGLE_CLIENT_EMAIL,
         null,
         process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
         SCOPES
         );
        jwtClient.authorize(() => resolve(jwtClient));
    });
  }

export default {
    authorize,
}