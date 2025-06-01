document.getElementById("form-orcamento").addEventListener("submit", function (e) {
    e.preventDefault();
    gtag('event', 'conversion', {
        'send_to': 'AW-16717164630/JWmOCOi3988aENbgrqM-'
    });

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const tipoResposta = document.querySelector("input[name='resposta']:checked").value;

    // Mensagem com quebras de linha normais
    let mensagem = ` Olá, meu nome é ${nome}.\n\n`;
    mensagem += `📧 Email: ${email}\n`;
    mensagem += `📱 Telefone: ${telefone}\n\n`;
    mensagem += `📝 Descrição do serviço:\n${descricao}\n\n`;
    mensagem += `📌 Preferência de contato: ${tipoResposta}`;

    if (tipoResposta === "whatsapp") {
        const numero = "5548991171998"; // seu número com DDI
        const url = ` https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    } else {
        const form = document.createElement("form");
        form.action = "https://formsubmit.co/extraordinariodesignerrodrigue@gmail.com";
        form.method = "POST";
        form.style.display = "none";

        form.innerHTML = `
      <input type="hidden" name="Nome" value="${nome}">
      <input type="hidden" name="Email" value="${email}">
      <input type="hidden" name="Telefone" value="${telefone}">
      <input type="hidden" name="Serviço" value="${descricao}">
      <input type="hidden" name="Preferência" value="${tipoResposta}">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_next" value="${window.location.href}">
    `;

        document.body.appendChild(form);
        setTimeout(() => {
            form.submit();

        }, 300);
    }

    document.getElementById("mensagem-ok").style.display = "block";
});