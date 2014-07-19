## CSS3动画
#### transition过渡  

+ linear  线性
- ease-in  先慢后快
- ease-out  先快后慢
- ease-in-out  起收都慢,中间快
- cubic-bezier 自定义 少用~

#### transform变换
- skew(45deg)倾斜
- scale(x,y)缩放
- rotate(45deg)旋转
- translate(x,y)位移


多次infinite  
逆向alternate

名称 时间 速度变化 延迟 次数 方向 结束状态
.myfun{animation:myfun 1s linear 1s infinite alternate;}
@keyframes myfun{
0%{}
100%{}
}

##### 结束状态有:

- forwards(最后状态)

- backwards(最初状态)

## box-sizing!!