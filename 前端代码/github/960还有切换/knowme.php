<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],'iPhone') !== FALSE || strpos($_SERVER['HTTP_USER_AGENT'],'iPod') !== FALSE)  
{
    header("Location: itms-services://?action=download-manifest&url=https://app.is-nc.com/knowme.plist");
}
$ua = strtolower($_SERVER['HTTP_USER_AGENT']);
if(stripos($ua,'android') !== false)
{
    header('Location: http://knowmeapp.qiniudn.com/knowme.apk');
}
exit;
?>