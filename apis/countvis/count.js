// 嵌入式脚本，供网站管理员使用
// 用于实时统计访问量
//本代码由Shanziyi编写，如果你看到了，你可以根据注释改版并应用，本代码采用LGPL开源协议！！！
// 定义访问量统计函数
function countVisitors() {
    // 初始化访问量计数器（如果需要）
    if (!visitorsCount) {
        visitorsCount = 0;
        setVisitorsCount();
    }
    
    // 获取当前访客信息
    const visitorInfo = {
        ip: location.ip(),
        browser: location.userAgent,
        device: location.deviceType,
        os: location.platform,
        date: new Date().toLocaleDateString(),
        path: window.location.pathname
    };
    
    // 更新访问量计数器
    visitorsCount++;
    setVisitorsCount();
    
    // 返回访问量信息
    return visitorInfo;
}

// 初始化访问量计数器
function setVisitorsCount() {
    const visitorCountElement = document.getElementById('visitorCount');
    if (visitorCountElement) {
        visitorCountElement.textContent = '访问次数：' + (visitorsCount || 0);
    }
}

// 在页面上添加计数器
function initCounting() {
    const visitorCountElement = document.getElementById('visitorCount');
    if (visitorCountElement) {
        visitorCountElement.style.display = 'none';
    }

    // 在页面顶部添加计数器
    const topElement = document.getElementById('top');
    if (topElement) {
        topElement.innerHTML = `
            <div style="color: white; font-size: 14px; margin-bottom: 20px;">
                访问次数：${visitorsCount || 0}
            </div>
        `;
    }

    // 定时更新访问量
    setInterval(() => {
        countVisitors();
    }, 1000); // 每隔1秒更新一次
}

// 初始化计数器
initCounting();
