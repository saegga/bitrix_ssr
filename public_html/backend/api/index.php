<?
$_SERVER['DOCUMENT_ROOT'] = $_SERVER['DOCUMENT_ROOT'] . '/backend';
require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php"); 

CModule::IncludeModule('iblock');

$elem = CIBlockElement::GetList([], ['IBLOCK_ID' => '1', 'ACTIVE' => 'Y'], false, false, ['ID','NAME', 'PREVIEW_TEXT', 'PREVIEW_PICTURE']);

$data = [];

while($el = $elem->Fetch()){
    $data[] = $el;
}
echo json_encode($data);

exit();