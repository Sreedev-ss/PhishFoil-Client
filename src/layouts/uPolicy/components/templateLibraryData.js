import { 
    Box, 
    Button, 
    Checkbox, 
    FormControlLabel, 
    FormGroup, 
    Paper, 
    Popover, 
    Switch, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow } from '@mui/material';
import React, { useState } from 'react'
import { AiOutlineArrowRight, AiOutlineReload } from 'react-icons/ai';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import SoftButton from 'components/SoftButton';
import SoftBox from 'components/SoftBox';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    height: '90%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


const TemplateLibraryData = () => {
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openAnchor = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Box sx={style}>
            <div 
                style=
                {{ 
                    width: '100%', 
                    height: '3rem' 
                }}
                >
                <h5 style={{ fontWeight: 400 }}>Viewing 1 of 38</h5>
            </div>
            <div 
                style=
                {{ 
                    border: '1px solid #e8e9e9', 
                    width: '100%', 
                    height: '90%'
                }}
                >
                <div 
                    style=
                    {{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        paddingLeft: 20, 
                        paddingRight: 20, 
                        marginTop: 10 
                    }}
                    >
                    <h3 style={{ fontWeight: 500 }}>Acceptable Encryption Policy</h3>
                    <Box 
                        sx=
                        {{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'end' 
                        }}
                        >
                        <Button
                            style={{
                                border: "0.5px solid rgb(30, 123, 228)",
                                color: "rgb(30, 123, 228)",
                                backgroundColor: "#fff",
                                width: '155px',
                                marginRight:'15px',
                                marginTop:'10px'
                            }}
                            size="small"
                        >
                            <AiOutlineReload 
                                fontSize={15} 
                                style=
                                {{
                                    color:'rgb(30, 123, 228)'
                                }} 
                            />
                            <p 
                                style=
                                {{
                                    color:'rgb(30, 123, 228)', 
                                    fontSize:'10px'
                                    }}
                                    >
                                        &nbsp;&nbsp;Refresh Template
                            </p>
                        </Button>
                        <FormGroup>
                            <FormControlLabel control={<Switch />} label="Hide Inactive Users" />
                        </FormGroup>
                    </Box>
                </div>
                <Box 
                    sx=
                    {{ 
                        width: '100%', 
                        padding: 1
                    }}
                    >
                    <Box 
                        sx=
                        {{ 
                            borderBottom: 1, 
                            borderColor: 'divider' 
                        }}
                        >
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <div 
                            style=
                            {{ 
                                height: '54vh', 
                                overflowY: 'scroll', 
                                paddingBottom: 30 
                            }}
                            >
                            <div style={{ display: 'flex', gap: 100 }}>                               
                            </div>
                            <div 
                                style=
                                {{ 
                                    display: 'flex', 
                                    gap: 100, 
                                    marginTop: 18 
                                }}
                                >
                                <Box 
                                    sx=
                                    {{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        gap: 2 
                                    }}
                                    >
                                    <p style={{ fontSize: 15 }}>Category:</p>
                                    <p 
                                        style=
                                        {{ 
                                            fontSize: 15, 
                                            color:'gray', 
                                            marginTop:'-15px', 
                                            fontWeight:'lighter' 
                                            }}
                                            >
                                                Encryption
                                    </p>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <p style={{ fontSize: 15 }}>Type:</p>
                                    <p style={{ fontSize: 15, color:'gray', marginTop:'-15px', fontWeight:'lighter' }}>Core</p>
                                </Box>
                                </div>                          
                            <div style={{ marginTop: 18 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <h5 style={{ marginBottom: 5 }}>Document</h5>
                                    <div
                                        style={{
                                            border: '1px solid #e8e9e9',
                                            padding: 5
                                        }}
                                    >
                                        <h3 style={{marginTop:'35px'}}>Acceptable Encryption Policy</h3>
                                        <div style={{marginTop:'30px'}}>
                                            <h4>1. Overview</h4>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'10px'
                                                }}
                                                >
                                                    Encryption is essential for the appropriate protection of sensitive 
                                                    and protected company documents, data and communications. This
                                                    Acceptable Encryption Policy sets out clear guidelines and requirements on encryption within the Company.
                                             </p>
                                        </div>
                                        <div style={{marginTop:'30px'}}>
                                            <h4>2. Purpose</h4>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'10px'
                                                }}
                                                >
                                                    The purpose of this policy is to provide rules and guidance on the use of encryption, and specifically 
                                                    outline the algorithms that are acceptable for use within the Company. 
                                                    These algorithms have received substantial public review and have been proven to work effectively.
                                            </p>
                                        </div>
                                        <div style={{marginTop:'30px'}}>
                                            <h4>3. Scope</h4>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'10px'
                                                }}
                                                >
                                                    This policy applies to all employees, temporary workers, contractors and agents 
                                                    acting on behalf of the company that may use or require knowledge 
                                                    of encryption technologies within their assigned job roles.
                                            </p>
                                        </div>
                                        <div style={{marginTop:'30px'}}>
                                            <h4>4. Policy</h4>
                                            <h5 style={{marginTop:'10px'}}>4.1. Algorithm Requirements</h5>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'10px'
                                            }}
                                            >
                                                <strong>4.1.1.</strong> 
                                                Ciphers in use must meet or exceed the set defined as AES-compatible or partially AES-compatible according to 
                                                the IETF/IRTF Cipher Catalog, or the set defined for use in the United States National Institute of Standards 
                                                and Technology (NIST) publication FIPS 140-2, or any superseding documents 
                                                according to the date of implementation. The use of the Advanced Encryption Standard (AES) is strongly recommended for symmetric encryption.
                                            </p>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'20px'
                                            }}
                                            >
                                                <strong>4.1.2.</strong> 
                                                Algorithms in use must meet the standards defined for use in NIST publication FIPS 140-2 or any superseding document, according to date of implementation. 
                                                The use of the RSA and Elliptic Curve Cryptography (ECC) algorithms is strongly recommended for asymmetric encryption.
                                            </p>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'20px'
                                            }}
                                            >
                                                <strong>4.1.3.</strong> 
                                                Signature Algorithms
                                            </p>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'20px'
                                            }}
                                            >
                                                <strong>4.1.3.1.</strong> 
                                                ECDSA. This algorithm should be used with a minimum key length of P-256.
                                            </p>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'20px'
                                            }}
                                            >
                                                <strong>4.1.3.1.</strong> 
                                                RSA. This algorithm should be used with a minimum 
                                                key length of 2048. This algorithm must only be used with a secure padding scheme.
                                            </p>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'20px'
                                            }}
                                            >
                                                <strong>4.1.3.2.</strong> 
                                                LWDM. This algorithm should be used with SHA256 encryption.
                                            </p>

                                            <h5 style={{marginTop:'40px'}}>4.2. Hash Function Requirements</h5>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'10px'
                                                }}
                                                >
                                                    <strong>4.2.1.</strong>
                                                    The Company adheres to the NIST Policy on Hash Functions.
                                            </p>

                                            <h5 style={{marginTop:'40px'}}>4.3. Key Agreement and Authentication</h5>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'10px'
                                                }}
                                                >
                                                    <strong>4.3.1.</strong> 
                                                    Key exchanges must use one of the following cryptographic protocols: DiffieHellman, IKE, or Elliptic curve Diffie-Hellman (ECDH).
                                            </p>
                                            <p 
                                            style={{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'20px'
                                                }}
                                                >
                                                    <strong>4.3.2.</strong> 
                                                    End points must be authenticated prior to the exchange or derivation of session keys.
                                            </p>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'20px'
                                                }}
                                                >
                                                    <strong>4.3.3.</strong> 
                                                    Public keys used to establish trust must be authenticated prior to use. 
                                                    Examples of authentication include transmission via cryptographically signed message or manual verification of the public key hash.
                                            </p>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'20px'
                                                }}
                                                >
                                                    <strong>4.3.4.</strong> 
                                                    All servers used for authentication (for example, RADIUS or TACACS) must have 
                                                    installed a valid certificate signed by a known trusted provider.
                                            </p>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'20px'
                                                }}
                                                >
                                                    <strong>4.3.5.</strong> 
                                                    All servers and applications using SSL or TLS must have the certificates signed by a known, trusted provider.
                                            </p>

                                            <h5 style={{marginTop:'40px'}}>4.4. Key Generation</h5>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'10px'
                                                }}
                                                >
                                                    <strong>4.4.1.</strong> 
                                                    Cryptographic keys must be generated and stored in a secure manner that prevents loss, theft or compromise.
                                            </p>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'10px'
                                                }}
                                                >
                                                    <strong>4.4.2.</strong> 
                                                    Key generation must be seeded from an industry standard random number generator (RNG).
                                            </p>
                                        </div>

                                        <div style={{marginTop:'30px'}}>
                                            <h4>5. Compliance</h4>
                                            <h5 style={{marginTop:'10px'}}>5.1. Compliance Measurement</h5>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'10px'
                                            }}
                                            >
                                                The Infosec team will verify compliance with this policy through any methods deemed appropriate, 
                                                including but not limited to: business tool reports, internal and external audits and feedback to the policy owner.
                                            </p>
                                            

                                            <h5 style={{marginTop:'40px'}}>5.2. Exceptions</h5>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'10px'
                                            }}
                                            >
                                                Any exceptions to this policy must be approved by the Infosec team in advance and have a written record.
                                            </p>

                                            <h5 style={{marginTop:'40px'}}>5.3. Non-Compliance</h5>
                                            <p 
                                            style=
                                            {{
                                                color:'gray', 
                                                fontSize:'18px', 
                                                marginTop:'10px', 
                                                marginBottom:'40px'
                                                }}
                                                > Any employee found to have violated this policy may be subject to disciplinary action, up to and including termination of employment.
                                            </p>   
                                        </div>                                        
                                    </div>                                    
                                </Box>
                            </div>                           
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <SoftBox
                            sx={{
                                "& .MuiTableRow-root:not(:last-child)": {
                                    "& td": {
                                        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                                            `${borderWidth[1]} solid ${borderColor}`,
                                    },
                                },
                            }}
                        >
                            <TableContainer component={Paper}>
                                <Table sx={{ width: "100%" }} aria-label="simple table">
                                    <TableHead sx={{ display: "table-header-group" }}>
                                        <TableRow sx={{ width: "20px" }}>
                                            <TableCell sx={{textAlign:'center'}} ></TableCell>
                                            <TableCell >Recipients</TableCell>
                                            <TableCell sx={{textAlign:'center'}} >Scheduled / Send At</TableCell>
                                            <TableCell sx={{textAlign:'center'}} >Status</TableCell>
                                            <TableCell sx={{textAlign:'center'}} >Reported</TableCell>
                                            <TableCell sx={{textAlign:'center'}} >Delivery Method</TableCell>                                   
                                            <TableCell ></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                                        >
                                            <TableCell><Checkbox {...label} /></TableCell>
                                            <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>Vedieshwaran R<br/><p style={{color:'grey'}}>vedieshwaran@twintechsolution.com</p></TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign:'center'}}>01/11/2023 05:31</TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign:'center' , textAlign:'center'}}>Not Sent</TableCell>
                                            <TableCell style={{ fontSize: "13px" , textAlign:'center'}}>N/A</TableCell>
                                            <TableCell style={{ fontSize: "13px" , textAlign:'center'}}></TableCell>
                                            <TableCell>
                                                <SoftButton
                                                    onClick={handleClick}
                                                    variant="outlined"
                                                    color="info"
                                                >
                                                    <AiOutlineArrowRight />
                                                </SoftButton>
                                                <Popover
                                                    id={id}
                                                    open={openAnchor}
                                                    anchorEl={anchorEl}
                                                    onClose={handleClose}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'left',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'left',
                                                    }}
                                                >
                                                </Popover>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </SoftBox>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                </Box>
            </div>
        </Box>
    )
}

export default TemplateLibraryData;
