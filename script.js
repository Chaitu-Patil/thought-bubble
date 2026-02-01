const connectBtn = document.getElementById("connectBtn");
const statusText = document.getElementById("status");

connectBtn.addEventListener("click", async () => {
  if (!navigator.bluetooth) {
    statusText.textContent = "Status: Web Bluetooth not supported";
    return;
  }

  try {
    statusText.textContent = "Status: Scanning for device...";

    const device = await navigator.bluetooth.requestDevice({
      filters: [
        { namePrefix: "Beanie" }
      ],
      optionalServices: []
    });

    statusText.textContent = `Status: Connecting to ${device.name}...`;

    const server = await device.gatt.connect();

    statusText.textContent = "Status: Connected ✅";
    console.log("Connected to", device.name);

  } catch (error) {
    console.error(error);
    statusText.textContent = "Status: Connection failed";
  }
});

  } catch (error) {
    console.error(error);
    statusText.textContent = "Status: Connection failed";
  }
});
