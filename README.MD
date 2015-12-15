1.安装  
```
composer require yidashi/yii2-bootstrap-markdown:"*"
```
2.使用  
>直接使用
```
<?= \yidashi\markdown\Markdown::widget(['name' => 'xxx', 'language' => 'zh'])?>
```
>或者在activeForm里使用
```
echo $form->field($model,'attributeName')->widget('yidashi\markdown\Markdown',[''language] => 'zh');
```
