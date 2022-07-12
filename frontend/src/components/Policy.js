import './Policy.css';
import { Link } from "react-router-dom";
import logo from "../ntua_logo.png";

const Policy = () => {
    return ( 
        <div className="policy">
            <div className="logo">
                <img src={logo} width="90" height="90" alt="logo of ntua" />
            </div>
            <div className="text">
                <h2>Our Privacy Notice:</h2>
                <p>The following provides a simple format for a data privacy notice. It is intended for business use and as a starting point only. 

To comply with the requirements of the General Data Protection Regulation (GDPR), you should customise this document to your specific requirements and business practices around privacy and data processing.  

Disclaimer: This sample privacy notice does not constitute legal advice. The content is for general information purposes only. It is provided without any representations or warranties, express or implied. If necessary, seek appropriate legal counsel in relation to GDPR or your specific circumstances. 

For definitive legal advice on providing privacy information under the GDPR, see the Information Commissioner’s Office guide on privacy notices. <br /> Introduction
Begin with a brief general statement on:
    • why privacy matters to you
    • the information contained within the privacy notice (ie clear and concise summary)
    • what services the notice applies to (eg website, software, purchases, subscription, etc)

You may include an encouragement for the user to read the policy carefully and contact you with any questions or concerns about your privacy practices.

Who we are?
Provide name and contact details of the data controller. This will typically be your business or you, if you are a sole trader. Where applicable, you should include the identity and contact details of the controller’s representative and/or the data protection officer. 

What information do we collect?
Specify the types of personal information you collect, eg names, addresses, user names, etc. You should include specific details on:
    • how you collect data (eg when a user registers, purchases or uses your services, completes a contact form, signs up to a newsletter, etc) 
    • what specific data you collect through each of the data collection method
    • if you collect data from third parties, you must specify categories of data and source
    • if you process sensitive personal data or financial information, and how you handle this 

You may want to provide the user with relevant definitions in relation to personal data and sensitive personal data. 

How do we use personal information?
Describe in detail all the service- and business-related purposes for which you will process data. For example, this may include things like:
    • personalisation of content, business information or user experience
    • account set up and administration
    • delivering marketing and events communication
    • carrying out polls and surveys
    • internal research and development purposes
    • providing goods and services
    • legal obligations (eg prevention of fraud)
    • meeting internal audit requirements

Please note this list is not exhaustive. You will need to record all purposes for which you process personal data. 

What legal basis do we have for processing your personal data?
Describe the relevant processing conditions contained within the GDPR. There are six possible legal grounds: 
    • consent
    • contract
    • legitimate interests
    • vital interests
    • public task 
    • legal obligation

Provide detailed information on all grounds that apply to your processing, and why. If you rely on consent, explain how individuals can withdraw and manage their consent. If you rely on legitimate interests, explain clearly what these are.

If you’re processing special category personal data, you will have to satisfy at least one of the six processing conditions, as well as additional requirements for processing under the GDPR. Provide information on all additional grounds that apply. 

When do we share personal data?
Explain that you will treat personal data confidentially and describe the circumstances when you might disclose or share it. Eg, when necessary to provide your services or conduct your business operations, as outlined in your purposes for processing. You should provide information on:
    • how you will share the data
    • what safeguards you will have in place
    • what parties you may share the data with and why</p>
            </div>
            <div className="link">
                <Link to="/" className="back">{`<-- `}Go back to singin</Link>
            </div>
        </div>
     );
}
 
export default Policy;