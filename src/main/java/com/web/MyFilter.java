package com.web;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebFilter(urlPatterns = "/*",filterName = "filter")
public class MyFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("过滤器开始初始化");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("过滤器开始工作");
        //防止用户在未登录的情况下访问资源
        HttpServletRequest request = (HttpServletRequest)servletRequest;//强转
        HttpServletResponse response = (HttpServletResponse)servletResponse;
        String requestURI = request.getRequestURI();//得到请求地址
        System.out.println(requestURI);
        Object uid = request.getSession().getAttribute("Uid");
        System.out.println();
        //必须要把登录页面的请求路径给加上，不然就会一直不能登录
        if(requestURI.endsWith("/index.html") || requestURI.endsWith("/login")){//如果是登录界面或请求路径，放行
            filterChain.doFilter(servletRequest, servletResponse);
        }else {
            if (uid == null){//
                System.out.println("uid == null");
                response.sendRedirect("/index.html");//重定向到登录界面
            }else {
                //放行
                System.out.println("过滤结束");
                System.out.println("uid != null");
                filterChain.doFilter(servletRequest, servletResponse);

            }

        }

    }

    @Override
    public void destroy() {
        System.out.println("过滤器销毁");
    }
}
