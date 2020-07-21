import React, {useContext} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
  english: {
    email: 'Email',
    password: 'Password',
    signIn: 'Sign In',
    remember: 'Remember Me',
    english: 'English',
    chinese: 'Chinese',
    hungarian: 'Hungarian'
  },
  chinese: {
    email: '電郵地址',
    password: '密碼',
    signIn: '登入',
    remember: '記得我的資料',
    english: '英文',
    chinese: '中文',
    hungarian: '匈牙利文'
  },
  hungarian: {
    email: 'Email Cím',
    password: 'Jelszó',
    signIn: 'Bejelentkezés',
    remember: 'Emlékezz Rám',
    english: 'Angol',
    chinese: 'Kínai',
    hungarian: 'Magyar'
  }
}

function Form(props){
  const {language, changeLanguage} = useContext(LanguageContext);
  const { classes } = props;
  const { email, password, signIn, remember, english, chinese, hungarian } = words[language];

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant='h5'>{signIn}</Typography>
        <Select value={language} onChange={changeLanguage} className={classes.signInHeader}>
          <MenuItem value='english'>{english}</MenuItem>
          <MenuItem value='chinese'>{chinese}</MenuItem>
          <MenuItem value='hungarian'>{hungarian}</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' name='email' autofocus></Input>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password' autofocus></Input>
          </FormControl>
          <FormControlLabel control={<Checkbox color='primary'/>} label={remember}/>
          <Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit}>{signIn}</Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(Form);