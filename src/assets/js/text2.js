var text = `
PbootCMS怎么修改管理员密码2021-10-28
PbootCMS灵活的多层级URL地址模式配置2021-10-28
PbootCMS自定义前台404错误页面2021-10-28
关于PbootCMS系统用户授权的声明2021-09-27
阿里云ECS服务器搭建PbootCMS企业网站2021-02-15
PbootCMS怎么修改域名授权提示信息2021-02-15
SEO优化之扁平化目录结构2019-08-07
[入门版] 第四课：PbootCMS标签的用处和调用-[晨星傲月] 推荐2019-07-24
[入门版] 第三课：PbootCMS开启独立手机端和模板设置-[晨星傲月] 推荐2019-07-24
[入门版] 第二课：PbootCMS模板设置和中英文的开启-[晨星傲月] 推荐2019-07-24
`;

var ans = text.split('\n');

ans = ans.filter((item) => item != '');

var arr = [];

for (item of ans) {
  index = item.indexOf('2');
  var time = item.substr(index, item.length);
  //   console.log('🚀 ~ file: text2.js ~ line 21 ~ time', time);
  var text = item.substr(0, index);
  var isRecommend = false;
  //   console.log('🚀 ~ file: text2.js ~ line 23 ~ text', text);

  if (text.indexOf(' 推荐') != -1) {
    isRecommend = true;
  }

  text = text.replace(' 推荐', '');

  arr.push({
    text,
    time,
    isRecommend,
  });
}

console.log(arr);
